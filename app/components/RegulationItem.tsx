type RuleItemProps = {
  text: string;
};

export const RuleItem = ({ text }: RuleItemProps) => (
  <li className="flex items-start gap-2 text-gray-200">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
    {text}
  </li>
);
