const NotFound = {
  async render() {
    return `
            <div class="bg-gray">
                <div id="error_page">
                    <div class="container">
                        <div class="row-center">
                            <figure><img src="./images/404.svg" alt="" class="img-fluid" width="550" height="234"></figure>
                            <p>We're sorry, but the page you were looking for doesn't exist.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },
};

export default NotFound;
