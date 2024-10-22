describe("Menu Component", () => {
    const roles = ["teacher", "students", "parents", "subjects", "classes", "lessons", "exams", "assignments", "results", "events", "announcements"];

    beforeEach(() => {
        cy.visit("http://localhost:3000/list/teachers");
    });

    roles.forEach((role) => {
        context(`when the role is ${role}`, () => {
            beforeEach(() => {
                cy.window().then((win) => {
                    win.localStorage.setItem("role", role);
                });
                cy.reload();
            });

            it(`Should display the correct menu items for ${role}`, () => {
                cy.get('[data-testid="cypress-list-menu"]').within(() => {
                    if (["teacher"].includes(role)) {
                        cy.get('[data-testid="menu-link-teachers"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/teachers");
                    }
                    if (["students"].includes(role)) {
                        cy.get('[data-testid="menu-link-students"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/students");
                    }
                    if (["parents"].includes(role)) {
                        cy.get('[data-testid="menu-link-parents"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/parents");
                    }
                    if (["subjects"].includes(role)) {
                        cy.get('[data-testid="menu-link-subjects"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/subjects");
                    }
                    if (["classes"].includes(role)) {
                        cy.get('[data-testid="menu-link-classes"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/classes");
                    }
                    if (["lessons"].includes(role)) {
                        cy.get('[data-testid="menu-link-lessons"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/lessons");
                    }
                    if (["exams"].includes(role)) {
                        cy.get('[data-testid="menu-link-exams"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/exams");
                    }
                    if (["assignments"].includes(role)) {
                        cy.get('[data-testid="menu-link-assignments"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/assignments");
                    }
                    if (["results"].includes(role)) {
                        cy.get('[data-testid="menu-link-results"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/results");
                    }
                    if (["events"].includes(role)) {
                        cy.get('[data-testid="menu-link-events"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/events");
                    }
                    if (["announcements"].includes(role)) {
                        cy.get('[data-testid="menu-link-announcements"]')
                            .should("be.visible")
                            .click().wait(4000);
                        cy.url().should("include", "http://localhost:3000/list/announcements");
                    }
                });
            });
        });
    });
});
