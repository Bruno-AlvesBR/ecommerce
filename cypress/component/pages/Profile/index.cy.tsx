import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { createMockRouter } from '../../../mocks/providers/router';
import { ProfileInitial } from '@/components/pages/profile/initial';
import { AuthContext, IAuthContext } from '@/hooks/authentication';
import { createMockAuth } from '../../../mocks/providers/auth';

interface IMakeSut {
  router: NextRouter;
  auth: IAuthContext;
}

const makeSut = ({
  router = createMockRouter({}),
  auth = createMockAuth({}),
}: Partial<IMakeSut>): IMakeSut => {
  cy.mount(
    <RouterContext.Provider value={router}>
      <AuthContext.Provider value={auth}>
        <ProfileInitial />
      </AuthContext.Provider>
    </RouterContext.Provider>,
  );

  return { router, auth };
};

describe('Profile Initial - Unit Tests', () => {
  it('Should be able to render the user profile initial', () => {
    makeSut({});

    cy.get("[data-testid='profile-initial-menu']").should('exist');
  });

  it('Should be able to render user heading', () => {
    makeSut({});

    cy.get("[data-testid='heading-user-name']").should('exist');
  });

  it('Should not be able to render user heading when user not found', () => {
    makeSut({ auth: {} as IAuthContext });

    cy.get("[data-testid='heading-user-name']").should('not.exist');
  });

  it('Should be able to click on exit button and call function logout', () => {
    makeSut({});

    const button = cy.get("[data-testid='exit-button']");

    button.should('exist');
    button.click();
  });
});
