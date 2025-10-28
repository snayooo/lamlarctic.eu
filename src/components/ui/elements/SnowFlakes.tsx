"use client";
import Snowfall from "react-snowfall";

export default function SnowFlakes() {
    return (
        <Snowfall snowflakeCount={160} speed={[.5, 1]} wind={[-.5, 2]} radius={[.5, 3]} />
    )
}