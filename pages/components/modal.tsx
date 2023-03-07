import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/styles/ButtonsCSS";
import { CSSProperties, styled } from "@stitches/react";
import * as DialogCSS from "../../styles/ModalCSS";

const DialogTitletCss = styled(Dialog.Title, DialogCSS.DialogTitle);
const DialogOverLayCss = styled(Dialog.Overlay, DialogCSS.DialogOverlay);
const DialogContentCss = styled(Dialog.Content, DialogCSS.DialogContent);
const DialogInputCss = styled("input", DialogCSS.Input);
const DialogDescriptionCss = styled(
  Dialog.Description,
  DialogCSS.DialogDescription
);
const Fildset = styled("fieldset", DialogCSS.Fieldset);
const DialogLabel = styled("label", DialogCSS.Label);

export type ModalProps = React.ComponentProps<typeof Dialog.Root> & {
  Title?: string | undefined;
  Overlay?: Boolean;
};

const Modal = ({ Title, Overlay = true, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      <DialogTitletCss> {Title} </DialogTitletCss>
      <Dialog.Trigger asChild>
        <Button variant={"violet"}> Modal </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {Overlay && <DialogOverLayCss />}
        <DialogContentCss>
          <h3> Edite Profile </h3>
          <DialogDescriptionCss>
            Here You can make changes to your profile.
          </DialogDescriptionCss>
          <Fildset>
            <DialogLabel> Name </DialogLabel>
            <DialogInputCss placeholder="Vitor Meneses" />
          </Fildset>
          <Dialog.Close asChild>
            <Button variant={"green"}> Save changes </Button>
          </Dialog.Close>
        </DialogContentCss>
      </Dialog.Portal>
    </Dialog.Root>
  );
};


export default Modal;
