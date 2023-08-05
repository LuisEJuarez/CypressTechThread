describe("API testing examples", () => {

    it("Creating a user(emulation)", function () {
        const userId = "7d01de84-9527-4855-a10c-043a637178b3";
        cy.wrap(userId).as("userId");
    });

    it("Get an authorization token from the API account", function () {
        cy.request('POST',`${Cypress.env("demoQA")}/Account/v1/GenerateToken`, {
            "userName": "test",
            "password": "Test1234*"
        }).then( (response) => {
            const token = response.body.token;
            cy.wrap(token).as("token");
        });
    });

    it("Get the user information", function () {
        const userId = this.userId;
        const token = this.token;
        const authorization = `Bearer ${token}`;
        const options = {
            method: "GET",
            url: `${Cypress.env("demoQA")}/Account/v1/User/${userId}`,
            headers: {
                Authorization: authorization,
            }
        }
        
        cy.request(options).then( (response) => {
            cy.log(response);

            cy.log("Status Code validations").then( () => {
                expect(response.status).to.be.eq(200);
                expect(response.statusText).to.be.eq("OK");

            });

            cy.log("Username assertion").then( () => {
                expect(response.body.username).to.be.eq("test");
            });
            
            cy.log("Book title assertion").then( () => {
                expect(response.body.books[0].title).to.be.eq("Git Pocket Guide");
            });

            cy.log("Schema assertion").then( () => {
                expect(response.body.username).to.be.a('string');
            });
        });


    });
});