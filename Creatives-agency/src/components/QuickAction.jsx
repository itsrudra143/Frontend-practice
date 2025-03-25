import { QuickActionItem } from "./Constants";
const QuickAction = () => {
  return (
    <div className="bg-[#11749e] flex items-center justify-center gap-24 h-64 sm:flex-col md:flex-col md:pt-5 md:pb-5 md:gap-4 sm:gap-8">
      <QuickActionItem>
        Cum sociis natoque penatibus et magnis dis parturient
        <br />
        montes, nascetur ridiculus mus. Lorem ipsum dolor sit
        <br />
        amet, consectetur adipiscing elit. Donec sed odio dui.
        <br />
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
      </QuickActionItem>
      <QuickActionItem>
        Cum sociis natoque penatibus et magnis dis parturient
        <br />
        montes, nascetur ridiculus mus. Lorem ipsum dolor sit
        <br />
        amet, consectetur adipiscing elit. Donec sed odio dui.
        <br />
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
      </QuickActionItem>
    </div>
  );
};

export default QuickAction;
