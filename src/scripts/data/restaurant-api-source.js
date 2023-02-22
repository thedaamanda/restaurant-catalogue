import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantApiSource {
    static async listRestaurant() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async searchRestaurant(query) {
        const response = await fetch(API_ENDPOINT.SEARCH(query));
        return response.json();
    }

    static async addReview(review) {
        await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        }).then((response) => {
            if(!response.ok) {
                throw new Error('Failed to add review');
            }
            return response.json();
        }).catch((error) => {
            return error;
        });
    }
}

export default RestaurantApiSource;
