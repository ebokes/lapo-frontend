import CardRequestTable from "@/components/card-request/card-request-table";
import Searchbar from "@/components/ui/searchbar";
import { cardRequests } from "@/utils/data";

const CardRequest = () => {
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-2 ">Card Request</h2>
      <p className="text-gray-600">View and attend to card requests here.</p>
      <hr className="w-full my-5 border-gray-300" />
      <div className="">
        <Searchbar
          rounded="rounded-[0.8rem]"
          placeholder="Search by branch"
          className="py-3 max-w-[350px]"
        />
      </div>
      <hr className="my-5 border-gray-300" />
      <CardRequestTable tableData={cardRequests} />
    </div>
  );
};

export default CardRequest;
