import { useMantineColorScheme, AppShell, Header, Group, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconSun, IconMoonStars } from '@tabler/icons-react';

interface ShellProps {
  children: React.ReactNode;
}

function Shell({ children }: ShellProps) {
  const colorSchemeContext = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      header={(
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
            Celestia UI
            <ActionIcon
              onClick={() => colorSchemeContext.toggleColorScheme()}
              variant="default"
              size="lg"
              sx={theme => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
              })}
            >
              {colorSchemeContext.colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Group>
        </Header>
      )}
    >
      {children}
    </AppShell>
  );
}

export default Shell;
