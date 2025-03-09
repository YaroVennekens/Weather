import { ThunderCloud } from "@/components/ui/icons/Thundercloud.tsx";
import { SnowCloud } from "@/components/ui/icons/SnowCloud.tsx";
import { RainingCloud } from "@/components/ui/icons/RainingCloud.tsx";
import { Cloud } from "@/components/ui/icons/Cloud.tsx";


import { WeatherData } from "@/interface/WeatherData.ts";
import {Sunny} from '@/components/ui/icons/Sunny.tsx'

interface WeatherCloudProps {
    weatherData: WeatherData;
}

const ConditionRenderer = ({ weatherData }: WeatherCloudProps) => {
    const condition = weatherData.condition.toLowerCase();

    if (condition.includes("thunderstorm")) {
        return <ThunderCloud delay={0} size={220} opacity={0.5} y={15} />;
    } else if (condition.includes("snow")) {
        return <SnowCloud delay={0} size={220} opacity={0.5} y={15} />;
    } else if (condition.includes("rain")) {
        return <RainingCloud delay={0} size={220} opacity={0.5} y={15} />;
    } else if (condition.includes("cloud")) {
        return <Cloud delay={0} size={220} opacity={0.5} y={15} />;
    } else if (condition.includes("sun")) {
        return <Sunny />;
    } else {
        return <Cloud delay={0.5} size={220} opacity={0.5} y={15} />;
    }
};

export default ConditionRenderer;