import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion';
import AccordionPanel from './AccordionPanel';
import Button from '../Button';

describe('Accordion', () => {
  it('Should render with one accordion', async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findByRole('button');
    expect(accordionTrigger).toBeInTheDocument();
  });

  it('Should render with multiple accordions', async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
        <AccordionPanel heading="Accordion 2">Accordion panel 2</AccordionPanel>
        <AccordionPanel heading="Accordion 3">Accordion panel 3</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findAllByRole('button');
    expect(accordionTrigger).toHaveLength(3);
  });

  it('Should have aria-expanded and show panel on click of accordion trigger', async () => {
    const user = userEvent.setup();

    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
      </Accordion>
    );

    const accordionTrigger = await screen.findByRole('button');
    await user.click(accordionTrigger);
    expect(screen.getByText('Accordion panel 1')).toBeInTheDocument();
    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it("Should get class 'bsds-accordion-stoplight-green' when stoplightColor prop value is 'green'", async () => {
    render(
      <Accordion headingLevel="h2">
        <AccordionPanel heading="Accordion 1" stoplightColor="green">
          Accordion panel 1
        </AccordionPanel>
      </Accordion>
    );

    const stoplightIcon = await screen.findByRole('heading');
    expect(stoplightIcon).toHaveClass('bsds-accordion-stoplight-green');
  });
});

it('Panel should have class "bsds-accordion-panel-expanded" when showing on click of accordion trigger', async () => {
  const user = userEvent.setup();

  render(
    <Accordion headingLevel="h2">
      <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
    </Accordion>
  );

  const accordionTrigger = await screen.findByRole('button');
  const accordionPanel = await screen.findByTestId('bsdsAccordionPanel');
  await user.click(accordionTrigger);
  expect(accordionPanel).toHaveClass('bsds-accordion-panel-expanded');
});

it('Only focuses children of expanded panels', async () => {
  const user = userEvent.setup();

  render(
    <Accordion headingLevel="h2">
      <AccordionPanel heading="Accordion 1">
        <Button data-testid="accordionPanel1Child">Accordion panel 1 child</Button>
      </AccordionPanel>
      <AccordionPanel heading="Accordion 2">
        <Button data-testid="accordionPanel2Child" hidden>
          Accordion panel 2 child
        </Button>
      </AccordionPanel>
      <AccordionPanel heading="Accordion 3">
        <Button data-testid="accordionPanel3Child" hidden>
          Accordion panel 3 child
        </Button>
      </AccordionPanel>
    </Accordion>
  );

  const accordionTrigger1 = await screen.findByRole('button', { name: 'Accordion 1' });
  const accordionTrigger2 = await screen.findByRole('button', { name: 'Accordion 2' });
  const accordionTrigger3 = await screen.findByRole('button', { name: 'Accordion 3' });

  const accordionPanel1Child = await screen.findByTestId('accordionPanel1Child');
  const accordionPanel2Child = await screen.findByTestId('accordionPanel2Child');
  const accordionPanel3Child = await screen.findByTestId('accordionPanel3Child');

  await waitFor(() => user.click(accordionTrigger1));
  expect(accordionPanel1Child).toBeVisible();

  await waitFor(() => user.keyboard('{Tab}'));
  expect(accordionPanel1Child).toHaveFocus();

  await waitFor(() => user.keyboard('{Tab}'));
  expect(accordionTrigger2).toHaveFocus();

  await waitFor(() => user.keyboard('{Tab}'));
  expect(accordionPanel2Child).not.toBeVisible();
  expect(accordionTrigger3).toHaveFocus();

  await waitFor(() => user.keyboard('{Tab}'));
  expect(accordionPanel3Child).not.toBeVisible();
});
