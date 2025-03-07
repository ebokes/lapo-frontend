import CardRequestTable from "@/components/card-request/page";
import Searchbar from "@/components/ui/searchbar";
import { CardRequestTableType } from "@/types/card-request-table";

const cardRequests: CardRequestTableType[] = [
  {
    id: 1,
    branch: "Lagos Main Branch",
    initiator: "John Doe",
    quantity: "50",
    batch: 101,
    dateRequested: "2025-03-01T10:30:00Z",
    status: "Pending",
  },
  {
    id: 2,
    branch: "Abuja HQ",
    initiator: "Jane Smith",
    quantity: "100",
    batch: 102,
    dateRequested: "2025-03-02T14:15:00Z",
    status: "Approved",
  },
  {
    id: 3,
    branch: "Port Harcourt Branch",
    initiator: "Samuel Adams",
    quantity: "75",
    batch: 103,
    dateRequested: "2025-03-03T09:45:00Z",
    status: "Rejected",
  },
  {
    id: 4,
    branch: "Kano Branch",
    initiator: "Amina Yusuf",
    quantity: "30",
    batch: 104,
    dateRequested: "2025-03-04T11:00:00Z",
    status: "Pending",
  },
  {
    id: 5,
    branch: "Enugu Branch",
    initiator: "Chibuokem Egbuchulam",
    quantity: "120",
    batch: 105,
    dateRequested: "2025-03-05T16:20:00Z",
    status: "Approved",
  },
];

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
