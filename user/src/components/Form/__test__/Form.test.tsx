import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Form from '..';

// beforeAll(()=>{})
// afterAll(()=>{})

describe('Form', () => {
  // input fields
  it('should render', () => {
    let props: any;
    render(<Form {...props} />);
  });
  it("should render 2 field placeholder: 1 'Field1' and 1 'Field2'", () => {
    let props: any;
    const testFormProps = [
      {
        type: 'plain',
        name: 'Field1',
      },
      {
        type: 'plain',
        name: 'Field2',
      },
    ];
    const {queryAllByPlaceholderText} = render(
      <Form {...props} field={testFormProps} />,
    );
    const inputField1 = queryAllByPlaceholderText('Field1');
    const inputField2 = queryAllByPlaceholderText('Field2');
    expect(inputField1).toBeTruthy();
    expect(inputField1.length).toEqual(1);
    expect(inputField2).toBeTruthy();
    expect(inputField2.length).toEqual(1);
  });

  it("should render text change in TextInput field 'Field1'->'foo' and 'Field2'->'bar", async () => {
    let props: any;
    const testFormProps = {
      field: [
        {
          type: 'plain',
          name: 'Field1',
        },
        {
          type: 'plain',
          name: 'Field2',
        },
      ],
    };
    const {getByDisplayValue, getByPlaceholderText} = render(
      <Form {...props} {...testFormProps} />,
    );
    const inputField1 = getByPlaceholderText('Field1');
    const inputField2 = getByPlaceholderText('Field2');

    const testInput1 = 'foo';
    const testInput2 = 'bar';

    await waitFor(() => {
      fireEvent.changeText(inputField1, testInput1);
      fireEvent.changeText(inputField2, testInput2);
    });

    expect(getByDisplayValue(testInput1)).toBeTruthy();
    expect(getByDisplayValue(testInput2)).toBeTruthy();
  });

  // TODO: input validation onBlur + error message
  it("should fire `onBlur` callback 1 time for each field once textInput field 'Field1' and 'Field2' go blur", async () => {
    const onUsernameInputFieldBlurMock = jest.fn();
    const onPasswordInputFieldBlurMock = jest.fn();
    let props: any;

    const testFormProps = {
      field: [
        {
          type: 'plain',
          name: 'Field1',
          validate: onUsernameInputFieldBlurMock,
        },
        {
          type: 'plain',
          name: 'Field2',
          validate: onPasswordInputFieldBlurMock,
        },
      ],
    };

    const {getByPlaceholderText} = render(
      <Form {...props} {...testFormProps} />,
    );
    const usernameInputField = getByPlaceholderText('Field1');
    const passwordInputField = getByPlaceholderText('Field2');

    await waitFor(() => {
      fireEvent(usernameInputField, 'blur');
      fireEvent(passwordInputField, 'blur');
    });
    expect(onUsernameInputFieldBlurMock).toHaveBeenCalledTimes(1);
    expect(onPasswordInputFieldBlurMock).toHaveBeenCalledTimes(1);
  });
  // action buttons

  it("should render 2 buttons: 1 'Button1' and 1 'Button2'", () => {
    let props: any;

    const testFormProps = {
      action: [{name: 'Button1'}, {name: 'Button2'}],
    };

    const {queryAllByText} = render(<Form {...props} {...testFormProps} />);
    const button1 = queryAllByText('Button1');
    const button2 = queryAllByText('Button2');
    expect(button1).toBeTruthy();
    expect(button1.length).toBe(1);
    expect(button2).toBeTruthy();
    expect(button2.length).toBe(1);
  });

  it("should fire 'button1Callback' 1 time on press 'Button1' and 1 time 'button2Callback' on 'Button2'", async () => {
    let props: any;
    let button1Callback = jest.fn();
    let button2Callback = jest.fn();
    const testFormProps = {
      action: [
        {name: 'Button1', callback: button1Callback},
        {name: 'Button2', callback: button2Callback},
      ],
    };
    const {getByText} = render(<Form {...props} {...testFormProps} />);
    const button1 = getByText('Button1');
    const button2 = getByText('Button2');
    await waitFor(() => {
      fireEvent.press(button1);
      fireEvent.press(button2);
    });
    expect(button1Callback).toHaveBeenCalledTimes(1);
    expect(button2Callback).toHaveBeenCalledTimes(1);

    // payloads check to be put in LoginScreen
  });

  // TODO: register navigation
});
