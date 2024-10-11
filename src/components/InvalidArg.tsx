import { UsageDiv } from "./styles/Output.styled";

type Props = {
    max_valid_arg: number;
    marginY?: boolean;
};


const InvalidArg: React.FC<Props> = ({ max_valid_arg, marginY = false }) => {
    return (
        <UsageDiv marginY={marginY}>
            ❌Invalid argument.<br />
            ✅Valid arguments: from 1 to {max_valid_arg}.<br />
        </UsageDiv>
    );
};

export default InvalidArg;
