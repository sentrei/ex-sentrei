import {yupResolver} from "@hookform/resolvers/yup";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import {useForm, Controller} from "react-hook-form";
import {useRecoilState, RecoilState} from "recoil";
import * as Yup from "yup";

import {
  isReservedNameroom,
  validateNameroom,
} from "@sentrei/common/firebase/namerooms";
import RoomCreateForm from "@sentrei/types/atom/RoomCreateForm";
import StepperButton from "@sentrei/ui/components/StepperButton";

export interface Props {
  atom: RecoilState<number>;
  form: RecoilState<RoomCreateForm>;
  spaceId: string;
  namespaceId: string;
}

const RoomStepperId = ({
  atom,
  form,
  spaceId,
  namespaceId,
}: Props): JSX.Element => {
  const {t} = useTranslation();

  const RoomStepperIdSchema = Yup.object().shape({
    id: Yup.string()
      .required(t("form:id.idRequired"))
      .matches(/^[a-z0-9][a-z0-9_]*([.][a-z0-9_]+)*$/, t("form:id.idInvalid"))
      .test("id", t("form:id.idInvalid"), value => {
        const result = isReservedNameroom(value || "");
        return !result;
      })
      .test("id", t("form:id.idAlreadyUsed"), async value => {
        const result = await validateNameroom(spaceId, value || "");
        return result;
      }),
  });

  const [, setActiveStep] = useRecoilState<number>(atom);

  const [activeForm, setActiveForm] = useRecoilState<RoomCreateForm>(form);

  const {control, register, errors, handleSubmit} = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: yupResolver(RoomStepperIdSchema),
  });

  const onSubmit = (data: Record<string, string>): void => {
    setActiveForm({
      id: data.id,
      name: activeForm.name,
      type: activeForm.type,
    });
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <Box p={3}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={7} sm={6} md={5}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              display="inline"
              gutterBottom
            >
              sentrei.com/{namespaceId}/
            </Typography>
          </Grid>
          <Grid item xs={5} sm={6} md={7}>
            <Controller
              as={
                <TextField
                  fullWidth
                  id="id"
                  label={t("common:common.id")}
                  margin="normal"
                  name="id"
                  required
                  variant="outlined"
                  error={!!errors.id}
                  inputRef={register}
                  helperText={errors.id ? errors.id.message : ""}
                  type="text"
                />
              }
              name="id"
              control={control}
              defaultValue={activeForm.id}
            />
          </Grid>
        </Grid>
      </Box>
      <StepperButton atom={atom} />
    </form>
  );
};

export default RoomStepperId;
