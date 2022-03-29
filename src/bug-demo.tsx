import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuButtonArrow,
  MenuItem,
  useMenuState
} from "ariakit";
import { Button } from "ariakit/button";
import {
  Dialog,
  DialogDismiss,
  DialogHeading,
  useDialogState
} from "ariakit/dialog";
import "./style.css";

export default function Example() {
  const [visible, setVisible] = useState(false);
  const dialog = useDialogState({ visible, setVisible });
  const menu = useMenuState({ animated: true });

  return (
    <>
      <Button onClick={() => setVisible(true)} className="button">
        Open dialog directly (works)
      </Button>
      <MenuButton state={menu} className="button">
        Open dialog through menu (doesn't work)
        <MenuButtonArrow />
      </MenuButton>
      <Menu state={menu} className="menu">
        <MenuItem className="menu-item" onClick={() => setVisible(true)}>
          Open dialog
        </MenuItem>
      </Menu>
      <Dialog state={dialog} className="dialog">
        <header className="header">
          <DialogHeading className="heading">I am a dialog</DialogHeading>
          <DialogDismiss className="button dismiss" />
        </header>
        <p>Dialog content</p>
      </Dialog>
    </>
  );
}
