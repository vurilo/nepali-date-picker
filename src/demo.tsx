import "./App.css";
import dayjs from "dayjs";
import "dayjs/locale/ne";
import {
  SegmentedControl,
  Card,
  Text,
  Container,
  Grid,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import {
  DateInput,
  DateValue,
  DatesProvider as NepaliDatesProvider,
} from "@vurilo/nepali-date-picker";
import NepaliDate from "nepali-date-converter";
import { useState } from "react";

const Demo = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: DateValue) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  return (
    <div>
      <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Card withBorder>
              {
                <SegmentedControl
                  onChange={() =>
                    setColorScheme(
                      computedColorScheme === "light" ? "dark" : "light"
                    )
                  }
                  variant="default"
                  size="sm"
                  aria-label="Toggle color scheme"
                  data={[
                    { label: "Dark", value: "dark" },
                    { label: "Light", value: "light" },
                  ]}
                ></SegmentedControl>
              }
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Card withBorder>
              {" "}
              {new NepaliDate(selectedDate).format("YYYY MMMM DD ")}
              <br />
              {dayjs(selectedDate).format("YYYY MMMM DD ")}
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Card withBorder>
              <Card.Section p={8}>
                <Text>Nepali</Text>
              </Card.Section>
              <NepaliDatesProvider
                settings={{
                  locale: "ne",
                  firstDayOfWeek: 0,
                  weekendDays: [6],
                  timezone: "UTC",
                }}
              >
                <DateInput
                  value={selectedDate}
                  isNepali={true}
                  onChange={handleDateChange}
                ></DateInput>
              </NepaliDatesProvider>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Card withBorder>
              <Card.Section p={8}>
                <Text>English</Text>
              </Card.Section>
              <NepaliDatesProvider
                settings={{
                  locale: "en",
                  firstDayOfWeek: 0,
                  weekendDays: [6],
                  timezone: "UTC",
                }}
              >
                <DateInput
                  value={selectedDate}
                  onChange={handleDateChange}
                  isNepali={false}
                />
              </NepaliDatesProvider>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>{" "}
    </div>
  );
};

export default Demo;
