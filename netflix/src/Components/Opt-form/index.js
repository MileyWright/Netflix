import React from 'react';

function OptForm({ children,  ...restProps }) {

    return (
        <Container {...restProps}> {children} </Container>
    )
}

export default OptForm;

OptForm.Input = function OptFormInput({...restProps}) {
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton({children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevon-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}) {
    return <Text {...restProps}> {children} </Text>
}