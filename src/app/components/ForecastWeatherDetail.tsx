import React from "react";
import Container from "./Container";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import { convertKelvinToCelsisus } from "../utils/convertKelvinToCelsisus";

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

const ForecastWeatherDetail = (props: ForecastWeatherDetailProps) => {
  return (
    <Container className="gap-4">
      {/**left */}
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={props.weatherIcon} />
          <p>{props.date}</p>
          <p className="text-sm">{props.day}</p>
        </div>
        {/** */}
        <div className="flex flex-col px-4">
          <span>{convertKelvinToCelsisus(props.temp ?? 0)}°</span>
          <p className="text-sm space-x-1 whitespace-nowrap">
            <span> Feels like</span>
            <span>{convertKelvinToCelsisus(props.feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize">{props.description}</p>
        </div>
      </section>
      {/**right*/}
      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
};

export default ForecastWeatherDetail;
