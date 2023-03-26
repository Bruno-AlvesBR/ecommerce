import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { ProfileMenu } from '@/components/core/ProfileMenu';
import { createMockRouter } from '../../../mocks/providers/router';
import { menuList } from '@/components/core/ProfileMenu/list';

interface IMakeSut {
  router: NextRouter;
}

const makeSut = ({
  router = createMockRouter({}),
}: Partial<IMakeSut>): IMakeSut => {
  cy.mount(
    <RouterContext.Provider value={router}>
      <ProfileMenu />
    </RouterContext.Provider>,
  );

  return { router };
};

describe('Profile Menu - Unit Tests', () => {
  it('Should be able to render the profile menu', () => {
    makeSut({});

    cy.get("[data-testid='profile-menu']").should('exist');
  });

  it('Should be able to render profile options', () => {
    makeSut({});

    menuList.forEach(item => {
      cy.get(`[data-testid='button-menu-${item.slug}']`).should(
        'exist',
      );
    });
  });

  it('Should be able to click on button', () => {
    makeSut({});

    menuList.forEach(item => {
      const button = cy.get(
        `[data-testid='button-menu-${item.slug}']`,
      );

      button.should('exist');
      button.click();
    });
  });
});
