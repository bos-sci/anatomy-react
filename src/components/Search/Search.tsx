// TODO: ADS-756 Create default texts object and assign in function params or Search.defaultProps instead of at each use case then re-enable control in story

import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useEffect,
  useId,
  useRef,
  useState
} from 'react';
import { RequireOnlyOne } from '../../types';
import Button from '../Button';
import IconClose from '../Icon/icons/IconClose';
import Link from '../Link';
import BoldMatch from '../BoldMatch';
import useConcatenation from '../../hooks/useConcatenation';

interface Result {
  to?: string;
  href?: string;
  text: string;
}

export type SearchResult = RequireOnlyOne<Result, 'href' | 'to'>;
export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isLabelVisible?: boolean;
  hasAutocomplete?: boolean;
  searchResults?: SearchResult[];
  formAttributes?: FormHTMLAttributes<HTMLFormElement>;
  texts?: {
    helpText?: string;
    buttonAriaLabel?: string;
    buttonText?: string;
    searchAriaLabel?: string;
    searchInputAriaLabel?: string;
    searchClearTextAriaLabel?: string;
    noResultsFound?: string;
  };
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  navigateToResult?: (result: SearchResult) => void;
  className?: string;
}

const Search = forwardRef(
  (
    {
      label,
      isLabelVisible = false,
      hasAutocomplete = true,
      searchResults,
      texts,
      placeholder,
      value,
      defaultValue,
      onInvalid,
      onBlur,
      onChange,
      onFocus,
      onFormSubmit,
      navigateToResult,
      className,
      formAttributes,
      ...inputAttrs
    }: SearchProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const searchId = useId();

    const [inputValue, setInputValue] = useState('');
    const [activeDescendant, setActiveDescendant] = useState<number>(0); // set to -1 to reset state
    const [isDirty, setIsDirty] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [autocompleteAria, setAutocompleteAria] = useState<string | undefined>();
    const [autocompleteAriaOwns, setAutocompleteAriaOwns] = useState<string | undefined>();
    const [autocompleteAriaComplete, setAutocompleteAriaComplete] = useState<'list' | undefined>();
    const [autocompleteAriaPopup, setAutocompleteAriaPopup] = useState<'listbox' | undefined>();
    const [ariaActiveDescendant, setAriaActiveDescendant] = useState<string | undefined>();

    const inputRef = useRef<HTMLInputElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    const moveActiveDesc = (distance: number) => {
      if (searchRef.current?.contains(document.activeElement) && searchResults && inputValue.length) {
        if (activeDescendant + distance > searchResults?.length - 1) {
          setActiveDescendant(0);
        } else if (activeDescendant + distance < 0) {
          setActiveDescendant(searchResults.length - 1);
        } else {
          setActiveDescendant(activeDescendant + distance);
        }
      }
    };

    const updateActiveDesc = (e: React.KeyboardEvent<HTMLDivElement>) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          moveActiveDesc(-1);
          break;

        case 'ArrowDown':
          e.preventDefault();
          moveActiveDesc(1);
          break;

        case 'Escape':
          e.preventDefault();
          setInputValue('');
          break;

        case 'Enter':
          if (searchResults && inputValue && navigateToResult) {
            navigateToResult(searchResults[activeDescendant]);
          }
          break;

        default:
          break;
      }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      if (onFormSubmit) {
        onFormSubmit(e);
      }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(e);
      }
      if (hasAutocomplete && inputValue) {
        setIsExpanded(true);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsDirty(true);
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      setActiveDescendant(-1);
      setIsExpanded(!!inputValue);
    }, [inputValue]);

    useEffect(() => {
      if (hasAutocomplete && !navigateToResult) {
        console.error(
          "Property 'navigateToResult' is missing on search. Either provide a value for 'navigateToResult' or set 'hasAutocomplete' to false."
        );
      }
    }, [hasAutocomplete, navigateToResult]);

    useEffect(() => {
      if (defaultValue && !isDirty) {
        setInputValue(defaultValue as string);
      } else if (value) {
        setInputValue(value as string);
      }
    }, [value, defaultValue, isDirty]);

    useEffect(() => {
      const closeOnClick = (e: PointerEvent) => {
        if (!searchRef.current?.contains(e.target as Node)) {
          setIsExpanded(false);
        }
      };

      window.addEventListener('pointerup', closeOnClick);
      return () => {
        window.removeEventListener('pointerup', closeOnClick);
      };
    });

    useEffect(() => {
      if (hasAutocomplete) {
        setAutocompleteAria('combobox');
        setAutocompleteAriaOwns(searchId + '-results');
        setAutocompleteAriaComplete('list');
        setAutocompleteAriaPopup('listbox');
      } else {
        setAutocompleteAria(undefined);
        setAutocompleteAriaOwns(undefined);
        setAutocompleteAriaComplete(undefined);
        setAutocompleteAriaPopup(undefined);
      }
    }, [hasAutocomplete, searchId]);

    useEffect(() => {
      if (activeDescendant >= 0) {
        setAriaActiveDescendant(searchId + '-result-' + activeDescendant);
      } else {
        setAriaActiveDescendant(undefined);
      }
    }, [activeDescendant, searchId]);

    return (
      <form
        action="."
        className={useConcatenation(['bsds-form-search', `${className || ''}`])}
        role="search"
        aria-label={texts?.searchAriaLabel || 'site search'}
        onSubmit={handleSubmit}
        {...formAttributes}
      >
        <div className="bsds-field">
          <label
            htmlFor={searchId}
            className={'bsds-field-label-text' + (!isLabelVisible ? ' bsds-visually-hidden' : '')}
          >
            {label || 'Search'}
          </label>
          <div className="bsds-search-control">
            <div ref={searchRef} className="bsds-input-search">
              <input
                ref={(node) => {
                  if (node) {
                    (inputRef as MutableRefObject<HTMLInputElement>).current = node;
                    if (typeof ref === 'function') {
                      ref(node);
                    } else if (ref) {
                      (ref as MutableRefObject<HTMLInputElement>).current = node;
                    }
                  }
                }}
                id={searchId}
                type="search"
                className="bsds-input"
                placeholder={placeholder || 'Search'}
                value={inputValue}
                name="query"
                role={autocompleteAria}
                autoComplete="off"
                aria-label={texts?.searchInputAriaLabel || 'search input'}
                aria-owns={autocompleteAriaOwns}
                aria-controls={autocompleteAriaOwns}
                aria-autocomplete={autocompleteAriaComplete}
                aria-haspopup={autocompleteAriaPopup}
                aria-expanded={!!(hasAutocomplete && isExpanded)}
                aria-describedby={texts?.helpText || ''}
                aria-activedescendant={ariaActiveDescendant}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyDown={updateActiveDesc}
                {...inputAttrs}
              />
              {/* TODO: ADS-96 pull this into an input addon component */}
              {!!inputValue && (
                <button
                  type="button"
                  className="bsds-search-clear"
                  aria-label={texts?.searchClearTextAriaLabel || 'clear search query'}
                  onClick={() => setInputValue('')}
                >
                  <IconClose className="bsds-icon-lg" />
                </button>
              )}
              {!!(hasAutocomplete && searchResults) && (
                <ul id={searchId + '-results'} className="bsds-search-results" hidden={!isExpanded}>
                  {searchResults.length > 0 &&
                    searchResults.map((result, i) => (
                      <li key={searchId + result.text} className="bsds-search-result">
                        <Link
                          id={searchId + '-result-' + i}
                          to={result.to}
                          href={result.href}
                          className={'bsds-link-nav' + (i === activeDescendant ? ' active-descendant' : '')}
                          aria-label={result.text}
                          tabIndex={-1}
                        >
                          <BoldMatch match={inputValue}>{result.text}</BoldMatch>
                        </Link>
                      </li>
                    ))}
                  {searchResults.length === 0 && (
                    <li id={searchId + '-result-0'} className="bsds-search-result bsds-search-result-none">
                      {texts?.noResultsFound || 'No results found'}
                    </li>
                  )}
                </ul>
              )}
            </div>
            <Button variant="assertive" disabled={!inputValue} aria-label={texts?.buttonAriaLabel || 'Search'}>
              {texts?.buttonText || 'Search'}
            </Button>
          </div>
          {!!texts?.helpText && (
            <p id={'inputHelpText' + searchId} className="bsds-field-help-text">
              {texts?.helpText}
            </p>
          )}
        </div>
      </form>
    );
  }
);

Search.displayName = 'Search';
export default Search;
