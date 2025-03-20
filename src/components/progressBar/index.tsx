type ProgressBarProps = {
    value: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => (
  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div className="bg-green-500 h-full" style={{ width: `${value}%` }}></div>
  </div>
);

export default ProgressBar;