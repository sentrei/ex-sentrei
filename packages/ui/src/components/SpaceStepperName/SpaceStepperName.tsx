import {yupResolver} from "@hookform/resolvers/yup";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import {useForm, Controller} from "react-hook-form";
import {useRecoilState, RecoilState} from "recoil";
import * as Yup from "yup";

import SpaceCreateForm from "@sentrei/types/atom/SpaceCreateForm";
import StepperButton from "@sentrei/ui/components/StepperButton";

export interface Props {
  atom: RecoilState<number>;
  form: RecoilState<SpaceCreateForm>;
}

const SpaceStepperName = ({atom, form}: Props): JSX.Element => {
  const {t} = useTranslation();

  const SpaceStepperIdSchema = Yup.object().shape({
    name: Yup.string().required(t("form:name.nameRequired")),
  });

  const [, setActiveStep] = useRecoilState<number>(atom);

  const [activeForm, setActiveForm] = useRecoilState<SpaceCreateForm>(form);

  const {control, register, errors, handleSubmit} = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: yupResolver(SpaceStepperIdSchema),
  });

  const onSubmit = (data: Record<string, string>): void => {
    setActiveForm({id: activeForm.id, name: data.name});
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <Box p={3}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8}>
            <Controller
              as={
                <TextField
                  fullWidth
                  id="name"
                  label={t("common:common.name")}
                  margin="normal"
                  name="name"
                  required
                  variant="outlined"
                  error={!!errors.name}
                  inputRef={register}
                  helperText={errors.name ? errors.name.message : ""}
                  type="text"
                />
              }
              name="name"
              control={control}
              defaultValue={activeForm.name}
            />
          </Grid>
        </Grid>
      </Box>
      <StepperButton atom={atom} />
    </form>
  );
};

export default SpaceStepperName;
