import "./App.css";
import "dayjs/locale/ne";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import Demo from "./demo";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Demo />
    </MantineProvider>
  );
}

export default App;
