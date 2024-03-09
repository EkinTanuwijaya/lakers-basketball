
import moment from "moment";
import { Button, DatePicker} from "antd";
import { Dayjs } from "dayjs";
const { RangePicker } = DatePicker;

interface HomeFormInterface{
    selectedRange: any;
    setSelectedRange : React.Dispatch<React.SetStateAction<[Dayjs | string | null, Dayjs | string| null]>>;
}
const HomeForm = ({selectedRange,setSelectedRange}:HomeFormInterface) => {

    const handleRangeChange = (dates: [Dayjs | null, Dayjs | null], dateStrings: [string, string]) => {
      setSelectedRange(dateStrings);
    };

    return (
        <div style={{ marginBottom:'10px' }}>
            <RangePicker
                onChange={handleRangeChange}
                format="YYYY-MM-DD"
                // value={selectedRange.map((date:any) =>
                //     date ? moment(date) : undefined
                //   )}
            />
        </div>
    );
}
export default HomeForm;