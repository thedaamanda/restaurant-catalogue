import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurants have been liked', () => {
        it('should render the information that no restaurants have been liked', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

            const presenter = new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });

            const restaurants = [];
            presenter._displayRestaurants(restaurants);

            expect(document.querySelectorAll('#error_page').length).toEqual(1);
        });

        it('should not render any restaurants', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });

            expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
        });

        it('should show the information that no restaurants have been liked', (done) => {
            document.getElementById('favorite-restaurant-list')
                .addEventListener('restaurants:updated', () => {
                    expect(document.querySelectorAll('#error_page').length).toEqual(1);
                    done();
                });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            favoriteRestaurants.getAllRestaurants.and.returnValues([]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });

    describe('When favorite restaurants exist', () => {
        it('should render the restaurants', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

            const presenter = new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });

            presenter._displayRestaurants([
                {
                    id: 1,
                    name: 'Satu',
                    city: 'Jakarta',
                    rating: 4,
                },
                {
                    id: 2,
                    name: 'Dua',
                    city: 'Bandung',
                    rating: 4,
                },
            ]);

            expect(document.querySelectorAll('.item-list').length).toEqual(2);
        });

        it('should show the restaurants', (done) => {
            document.getElementById('favorite-restaurant-list')
                .addEventListener('restaurants:updated', () => {
                    expect(document.querySelectorAll('.item-list').length).toEqual(2);
                    done();
                });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            favoriteRestaurants.getAllRestaurants.and.returnValues([
                {
                    id: 1,
                    name: 'Satu',
                    city: 'Jakarta',
                    rating: 4,
                },
                {
                    id: 2,
                    name: 'Dua',
                    city: 'Bandung',
                    rating: 4,
                },
            ]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });
});
