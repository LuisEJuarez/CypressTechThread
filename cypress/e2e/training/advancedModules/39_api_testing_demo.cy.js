describe("Basic API test examples", () => {

    it("GET request", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            cy.log("Response: ", response);
            cy.log(response.body);
        });
    });

    it("POST request", () => {
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts",
            {
                title: 'Title #101',
                body: 'Post #101',
                userId: 101,
            }).then((response) => {
                cy.log("Response: ", response);
                cy.log(response.body);
            });
    });

    it("PUT request", () => {
        cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1",
            {
                id: 1,
                title: 'Foo updated',
                body: 'Bar updated',
                userId: 1,
            }).then((response) => {
                cy.log("Response: ", response);
                cy.log(response.body);
            });
    });

    it("DELETE request", () => {
        cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1",).then((response) => {
                cy.log("Response: ", response);
                cy.log(response.body);
            });
    });

});