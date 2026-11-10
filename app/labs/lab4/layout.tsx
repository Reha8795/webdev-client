import ReduxProvider from "./redux/ReduxProvider";

export default function Lab4Layout({ children }: { children: React.ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
