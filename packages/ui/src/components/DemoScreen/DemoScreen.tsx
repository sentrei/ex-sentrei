import Box from "@material-ui/core/Box";

import useTranslation from "next-translate/useTranslation";
import * as React from "react";

import DemoBanner from "@sentrei/ui/components/DemoBanner";
import DemoSection from "@sentrei/ui/components/DemoSection";

export default function DemoScreen(): JSX.Element {
  const {t} = useTranslation();

  return (
    <>
      <DemoBanner />
      <Box p={1} />
      <DemoSection
        title={t("demo:section.one")}
        url="https://youtube.com/watch?v=e9d--yzKKLw"
      />
      <Box p={3} />
    </>
  );
}
