import { View } from "react-native";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo, useState } from "react";
import Empty from "@/components/empty";
import translate from "@/locale";

const withErrorBoundary = (Component: React.FC) => {
  return (props: React.ComponentProps<typeof Component>) => {
    const getErrorView = ({}) => {
      return (
        <Empty
          title={translate("weSorry")}
          description={translate("somethingWrong")}
        />
      );
    };

    const reportError = (error: Error, info: ErrorInfo) => {
      /* crashlytics */
    };

    return (
      <ErrorBoundary fallbackRender={getErrorView} onError={reportError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary;
