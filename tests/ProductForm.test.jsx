import React from 'react';
import { render } from '@testing-library/react';
import ProductForm from '../src/components/ProductForm.jsx'

test('render ProductForm to check alert', () => {
    render(<ProductForm />)
    const code = ProductForm.toString();
    console.log(code);
    const expectedText = 'alert(`{\n"name": "${name}",\n"price": ${price},\n "image": "${image}",\n "description": "${description}"\n}`)'
    const expectedText2 = 'alert(`"name": ${name} "price": ${price} "image": ${image} "description": ${description}`)'

    expect(code).toContain(expectedText2) || expect(code).toContain(expectedText)

})

test('render ProductForm to check onChange', () => {
    render(<ProductForm />)
    const code = ProductForm.toString()
    const expectText = 'event.target.value'
    const expectText1 = 'e.target.value'

    expect(code).toContain(expectText) || expect(code).toContain(expectText1)
}
)