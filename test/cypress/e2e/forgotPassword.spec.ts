describe('/#/forgot-password', () => {
  beforeEach(() => {
    cy.get('body').then(($body) => {
      if ($body.find('#logout').length) {
        cy.get('#logout').click()
      }
    })
    cy.visit('/#/forgot-password')
    cy.intercept('GET', '/rest/user/security-question?email=*').as('securityQuestion')
  })

  describe('as UserA', () => {
    it('should be able to reset password with his security answer', () => {
      cy.task<string>('GetFromConfig', 'application.domain').then(
        (appDomain: string) => {
          cy.get('#email').type(`usera@${appDomain}`)
        }
      )
      cy.wait('@securityQuestion')
      cy.get('#securityAnswer').should('not.be.disabled').focus().type('Samuel')
      // recordings to properly fix behavior during test
      cy.get('#newPassword').focus().type('I <3 Spock')
      cy.get('#newPasswordRepeat').focus().type('I <3 Spock')
      cy.get('#resetButton').click()

      cy.get('.confirmation').should('not.be.hidden')
      cy.expectChallengeSolved({ challenge: "Reset UserA's Password" })
    })
  })

  describe('as UserB', () => {
    it('should be able to reset password with his security answer', () => {
      cy.task<string>('GetFromConfig', 'application.domain').then(
        (appDomain: string) => {
          cy.get('#email').type(`userb@${appDomain}`)
        }
      )
      cy.wait('@securityQuestion')
      cy.get('#securityAnswer').should('not.be.disabled').focus().type("Stop'n'Drop")
      // recordings to properly fix behavior during test
      cy.get('#newPassword').focus().type('Brannigan 8=o Leela')
      cy.get('#newPasswordRepeat').focus().type('Brannigan 8=o Leela')
      cy.get('#resetButton').click()

      cy.get('.confirmation').should('not.be.hidden')
      cy.expectChallengeSolved({ challenge: "Reset UserB's Password" })
    })
  })

  describe('as UserE', () => {
    describe('for his internal account', () => {
      it('should be able to reset password with his security answer', () => {
        cy.task<string>('GetFromConfig', 'application.domain').then(
          (appDomain: string) => {
            cy.get('#email').type(`bjoern@${appDomain}`)
          }
        )
        cy.wait('@securityQuestion')
        cy.get('#securityAnswer').should('not.be.disabled').focus().type('West-2082')
        // recordings to properly fix behavior during test
        cy.get('#newPassword').focus().type('monkey birthday ')
        cy.get('#newPasswordRepeat').focus().type('monkey birthday ')
        cy.get('#resetButton').click()

        cy.get('.confirmation').should('not.be.hidden')
        cy.expectChallengeSolved({ challenge: "Reset UserE's Password" })
      })
    })

    describe('for his Security Project account', () => {
      it('should be able to reset password with his security answer', () => {
        cy.get('#email').type('bjoern@owasp.org')
        cy.wait('@securityQuestion')
        cy.get('#securityAnswer').should('not.be.disabled').focus().type('Zaya')
        // recordings to properly fix behavior during test
        cy.get('#newPassword').focus().type('kitten lesser pooch')
        cy.get('#newPasswordRepeat').focus().type('kitten lesser pooch')
        cy.get('#resetButton').click()

        cy.get('.confirmation').should('not.be.hidden')
        cy.expectChallengeSolved({ challenge: "UserE's Favorite Pet" })
      })
    })
  })

  describe('as UserC', () => {
    it('should be able to reset password with his security answer', () => {
      cy.task<string>('GetFromConfig', 'application.domain').then(
        (appDomain: string) => {
          cy.get('#email').type(`morty@${appDomain}`)
        }
      )
      cy.wait('@securityQuestion')
      cy.get('#securityAnswer').should('not.be.disabled').focus().type('5N0wb41L')
      // recordings to properly fix behavior during test
      cy.get('#newPassword').focus().type('iBurri3dMySe1f!')
      cy.get('#newPasswordRepeat').focus().type('iBurri3dMySe1f!')
      cy.get('#resetButton').click()

      cy.get('.confirmation').should('not.be.hidden')
      cy.expectChallengeSolved({ challenge: "Reset UserC's Password" })
    })
  })

  describe('as UserD', () => {
    it('should be able to reset password with his security answer', () => {
      cy.task<string>('GetFromConfig', 'application.domain').then(
        (appDomain: string) => {
          cy.get('#email').type(`uvogin@${appDomain}`)
        }
      )
      cy.wait('@securityQuestion')
      cy.get('#securityAnswer').should('not.be.disabled').focus().type('Silence of the Lambs')
      // Cypress recordings to properly fix behavior during test
      cy.get('#newPassword').focus().type('ora-ora > muda-muda')
      cy.get('#newPasswordRepeat').focus().type('ora-ora > muda-muda')
      cy.get('#resetButton').click()

      cy.get('.confirmation').should('not.be.hidden')
      cy.expectChallengeSolved({ challenge: "Reset UserD's Password" })
    })
  })
})
