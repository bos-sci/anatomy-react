import {
  createRef,
  KeyboardEvent,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
  useId
} from 'react';
import IconChevronLeft from '../Icon/icons/IconChevronLeft';
import IconChevronRight from '../Icon/icons/IconChevronRight';
import Tab from './Tab';

export interface TabsProps {
  children: ReactElement[] | ReactElement;
  /**
   * Label to be read by screen readers
   */
  tablistLabel: string;
}

let tabsId = 0;

const Tabs = (props: TabsProps): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabPanelId, setTabPanelId] = useState('');
  const [tabPanels, setTabPanels] = useState<ReactElement[]>([]);
  const [tabRefs, setTabRefs] = useState<RefObject<HTMLButtonElement>[]>([]);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [visibleRange, setVisibleRange] = useState([0, 0]);
  const [scrollBtnStates, setScrollBtnStates] = useState([false, false]); // [leftScrollBtn, rightScrollBtn] disabled when true
  const [tablistTabIndex, setTablistTabIndex] = useState(0);

  const tabListRef = useRef<HTMLDivElement>(null);
  const tablistLabelId = useId();

  const scrollManager = useCallback(() => {
    if (tabListRef.current) {
      setHasOverflow(tabListRef.current.scrollWidth > tabListRef.current.clientWidth);
    }

    // Determines the index of the first and last visible tab
    // A tab is deemed visible if 2/3 of it are in the scroll area
    const tabsVisibility = tabRefs.map((ref) => {
      const currentRef = ref.current;
      if (!currentRef) {
        return false;
      }

      const rightEdge = currentRef.offsetLeft + ref.current?.clientWidth * 0.66;
      const leftEdge = currentRef.offsetLeft + ref.current?.clientWidth * 0.33;

      const tabListCurrentRef = tabListRef.current;
      if (!tabListCurrentRef) {
        return false;
      }

      return (
        rightEdge < tabListCurrentRef.scrollLeft + tabListCurrentRef.clientWidth &&
        leftEdge > tabListCurrentRef.scrollLeft
      );
    });
    setVisibleRange([tabsVisibility.indexOf(true), tabsVisibility.lastIndexOf(true)]);

    // Disable controls when scrolled all the way left or right
    if (tabListRef.current) {
      if (tabListRef.current?.scrollLeft === 0) {
        setScrollBtnStates([true, false]);
      } else if (tabListRef.current?.scrollLeft === tabListRef.current?.scrollWidth - tabListRef.current?.clientWidth) {
        setScrollBtnStates([false, true]);
      } else {
        setScrollBtnStates([false, false]);
      }
    }
  }, [tabRefs]);

  // Scrolls to the tab "distance" tabs away from the left or right most visible tab
  const scrollTabs = (distance: number) => {
    const currentTarget = distance < 0 ? visibleRange[0] : visibleRange[1];
    let newTarget = 0;
    if (currentTarget + distance > tabRefs.length - 1) {
      newTarget = tabRefs.length - 1;
    } else if (currentTarget + distance < 0) {
      newTarget = 0;
    } else {
      newTarget = currentTarget + distance;
    }

    const behavior = window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? 'smooth' : 'auto';
    if (newTarget === 0) {
      tabListRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior
      });
    } else if (newTarget === tabRefs.length - 1) {
      tabListRef.current?.scrollTo({
        top: 0,
        left: tabListRef.current.scrollWidth - tabListRef.current.clientWidth,
        behavior
      });
    } else {
      tabRefs[newTarget].current?.scrollIntoView({
        behavior,
        block: 'nearest',
        inline: distance < 0 ? 'start' : 'end'
      });
    }
  };

  const selectTab = (index: number) => {
    const tabRef = tabRefs[index];
    setSelectedTab(index);
    tabRef.current?.focus();
  };

  const keyManager = (e: KeyboardEvent<HTMLDivElement>) => {
    let nextTab = 0;
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (selectedTab === 0) {
          nextTab = tabPanels.length - 1;
        } else {
          nextTab = selectedTab - 1;
        }
        selectTab(nextTab);
        break;

      case 'ArrowRight':
        e.preventDefault();
        if (selectedTab === tabPanels.length - 1) {
          nextTab = 0;
        } else {
          nextTab = selectedTab + 1;
        }
        selectTab(nextTab);
        break;

      case 'Home':
        e.preventDefault();
        selectTab(0);
        break;

      case 'End':
        e.preventDefault();
        selectTab(tabPanels.length - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const idNum = ++tabsId;
    setTabPanelId('tabPanel' + idNum);
  }, []);

  useEffect(() => {
    if (Array.isArray(props.children)) {
      setTabPanels(props.children);
    } else {
      setTabPanels([props.children]);
    }
    // eslint-disable-next-line prefer-const
    let refs: RefObject<HTMLButtonElement>[] = [];
    for (let i = 0; i < tabPanels.length; i++) {
      refs.push(createRef());
    }
    setTabRefs(refs);
  }, [props.children, tabPanels.length]);

  useEffect(() => {
    scrollManager();
  }, [scrollManager, tabListRef.current?.scrollWidth]);

  useEffect(() => {
    window.addEventListener('resize', scrollManager);
    return () => {
      window.removeEventListener('resize', scrollManager);
    };
  }, [scrollManager]);

  useEffect(() => {
    if (selectedTab === 0) {
      setTablistTabIndex(0);
    } else {
      setTablistTabIndex(-1);
    }
  }, [selectedTab]);

  return (
    <div className={'bsds-tabs' + (hasOverflow ? ' has-overflow' : '')}>
      <p className="bsds-visually-hidden" id={tablistLabelId}>
        {props.tablistLabel}
      </p>
      <div className="bsds-tab-controls">
        <div
          ref={tabListRef}
          className="bsds-tab-list"
          role="tablist"
          aria-labelledby={tablistLabelId}
          tabIndex={tablistTabIndex}
          onKeyDown={keyManager}
          onScroll={scrollManager}
        >
          {tabPanels.map((tabPanel, index) => (
            <Tab
              key={`${tabPanelId + index}Tab`}
              tabName={tabPanel.props.tabName}
              index={index}
              setSelectedTab={setSelectedTab}
              isActive={index === selectedTab}
              tabPanelId={tabPanelId + index}
              tabRef={tabRefs[index]}
            />
          ))}
        </div>
        <div className="bsds-tab-overflow">
          <button
            className="bsds-tab-overflow-control"
            disabled={scrollBtnStates[0]}
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => scrollTabs(-1)}
          >
            <IconChevronLeft className="bsds-icon-2x" />
          </button>
          <button
            className="bsds-tab-overflow-control"
            disabled={scrollBtnStates[1]}
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => scrollTabs(1)}
          >
            <IconChevronRight className="bsds-icon-2x" />
          </button>
        </div>
      </div>
      <div className="bsds-tab-panels">
        {tabPanels.map((tabPanel, index) => (
          <div
            key={tablistLabelId + tabPanel.props.tabName}
            id={tabPanelId + index}
            className="bsds-tab-panel"
            role="tabpanel"
            aria-labelledby={`${tabPanelId + index}Tab`}
            tabIndex={0}
            hidden={index !== selectedTab}
          >
            {tabPanel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
