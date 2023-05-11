import { Dna } from "react-loader-spinner";

const DnaLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black opacity-100">
      <Dna visible={true} height="120" width="120" ariaLabel="dna-loading" />
    </div>
  );
};

export default DnaLoader;
