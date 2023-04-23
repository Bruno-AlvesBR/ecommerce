import Skeleton from '@mui/material/Skeleton';

import { useAuth } from '@/presentation/hooks/authentication';
import { Button } from '@/presentation/components/core/Button';

interface IProfileInitial {}

const ProfileInitial: React.FC<IProfileInitial> = ({}) => {
  const { handleLogout, user } = useAuth();

  return (
    <div
      className="relative w-full bg-white1000 h-fit p-6 gap-4 flex flex-col"
      data-testid="profile-initial-menu"
    >
      <div className="relative flex flex-col w-full gap-4">
        {user?.name ? (
          <h2
            className="text-7 font-semibold sm:text-4"
            data-testid="heading-user-name"
          >
            Seja bem-indo (a), {user.name?.firstName}.
          </h2>
        ) : (
          <Skeleton
            variant="text"
            className="w-full text-7 text-transparent flex flex-1"
          />
        )}
      </div>

      <Button
        data-testid="exit-button"
        onClick={handleLogout}
        className="bg-red800"
        fullWidth
      >
        SAIR
      </Button>
    </div>
  );
};

export { ProfileInitial };
