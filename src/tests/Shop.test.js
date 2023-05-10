import React from 'react';
import ShopList from '../components/ShopList';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ShopList', () => {
    let screen

    beforeEach(() => {
      screen = render(<ShopList/>)
    });

    xit('renders a list of items', () => {
        render(<ShopList items={items} addToBasket={addToBasket} />);

        const itemElements = screen.getAllByTestId('item');
        expect(itemElements).toHaveLength(items.length);
    });

    xit('calls the addToBasket function when Add to basket button is clicked', () => {
        render(<ShopList items={items} addToBasket={addToBasket} />);

        const addButton = screen.getAllByRole('button', { name: 'Add to basket' })[0];
        fireEvent.click(addButton);

        expect(addToBasket).toHaveBeenCalledTimes(1);
        expect(addToBasket).toHaveBeenCalledWith(items[0]);
    });
});
