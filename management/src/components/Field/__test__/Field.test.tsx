import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Field from '..';

// beforeAll(()=>{})
// afterAll(()=>{})

describe('Field', () => {
  /* render */
  it('should render', () => {
    let props: any;
    render(<Field {...props} />);
  });
  /* fields */
  it("should render with 'Field1'", () => {
    let props: any;
    let testPlaceholder = 'Field1';
    let {getByPlaceholderText} = render(
      <Field {...props} placeholder={testPlaceholder} />,
    );
    let testField = getByPlaceholderText(testPlaceholder);
    expect(testField).toBeTruthy();
  });
  it("should render textChange in field 'Field1'->'foo'", async () => {
    let props: any;
    let testPlaceholder = 'Field1';
    let testInput = 'foo';
    let {getByPlaceholderText, getByDisplayValue} = render(
      <Field {...props} placeholder={testPlaceholder} />,
    );
    let testField = getByPlaceholderText(testPlaceholder);
    await waitFor(() => {
      fireEvent.changeText(testField, testInput);
    });
    expect(getByDisplayValue(testInput)).toBeTruthy();
  });
  it("should fire `onBlur` validation callback 1 time for field 'Field1' once it go blur", async () => {
    let props: any;
    let testPlaceholder = 'Field1';
    let onField1BlurMock = jest.fn();
    let {getByPlaceholderText, getByDisplayValue} = render(
      <Field
        {...props}
        placeholder={testPlaceholder}
        validate={onField1BlurMock}
      />,
    );
    let testField = getByPlaceholderText(testPlaceholder);
    await waitFor(() => {
      fireEvent(testField, 'blur');
    });
    expect(onField1BlurMock).toHaveBeenCalledTimes(1);
  });
});
