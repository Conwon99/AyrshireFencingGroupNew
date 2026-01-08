export type DetailItemProps = {
  label: string;
  value: string;
};

export const DetailItem = (props: DetailItemProps) => {
  return (
    <div className="bg-slate-50 box-border caret-transparent p-5 rounded-[20px]">
      <div className="text-gray-900 text-[22px] font-bold box-border caret-transparent leading-[33px] mb-2.5">
        {props.label}
      </div>
      <div className="box-border caret-transparent">{props.value}</div>
    </div>
  );
};
