import { CommandBarButton, DefaultButton, IButtonProps } from '@fluentui/react';
import { bundleIcon, ShareRegular, ShareFilled, HistoryRegular, HistoryFilled } from '@fluentui/react-icons';
import styles from './Button.module.css';

// Create bundled icons (auto-switch between regular/filled themes)
const ShareIcon = bundleIcon(ShareFilled, ShareRegular);
const HistoryIcon = bundleIcon(HistoryFilled, HistoryRegular);

interface ButtonProps extends IButtonProps {
  onClick: () => void;
  text?: string;
}

export const ShareButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <CommandBarButton
      className={styles.shareButtonRoot}
      onClick={onClick}
      text={text}
      iconProps={{ iconName: undefined }} // disable old prop
      onRenderIcon={() => <ShareIcon />} // ✅ modern Fluent UI v9 icon
    />
  );
};

export const HistoryButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <DefaultButton
      className={styles.historyButtonRoot}
      onClick={onClick}
      text={text}
      iconProps={{ iconName: undefined }}
      onRenderIcon={() => <HistoryIcon />}
    />
  );
};
