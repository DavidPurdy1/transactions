import { AppProps, type AppType } from "next/app";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/clerk-react";
import "~/styles/globals.css";

export const MyApp: AppType = ({ Component, pageProps } : AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
