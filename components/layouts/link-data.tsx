import BranchesIcon from "../icons/sidebar/branches-icon";
import CardProfileIcon from "../icons/sidebar/card-profile-icon";
import CardRequestIcon from "../icons/sidebar/card-request-icon";
import CardSchemeIcon from "../icons/sidebar/card-scheme-icon";
import DashboardIcon from "../icons/sidebar/dashboard-icon";
import RolesIcon from "../icons/sidebar/roles-icon";
import UsersIcon from "../icons/sidebar/users-icon";
import StockIcon from "../icons/sidebar/stock-icon";
import CardsIcon from "../icons/sidebar/cards-icon";
import AuthorizationListIcon from "../icons/sidebar/authorization-list-icon";
import AuthorizationQueueIcon from "../icons/sidebar/authorization-queue-icon";
import TrailIcon from "../icons/sidebar/trail-icon";
import AccountIcon from "../icons/sidebar/account-icon";

export interface LinkProps {
  label?: string;
  path?: string;
  icon?: any;
}

const Links: Array<LinkProps> = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },
  {
    label: "Branches",
    path: "/dashboard/branches",
    icon: BranchesIcon,
  },
  {
    label: "Roles",
    path: "/dashboard/roles",
    icon: RolesIcon,
  },
  {
    label: "Users",
    path: "/dashboard/users",
    icon: UsersIcon,
  },
  {
    label: "Card Scheme",
    path: "/dashboard/card-scheme",
    icon: CardSchemeIcon,
  },
  {
    label: "Card Profile",
    path: "/dashboard/card-profile",
    icon: CardProfileIcon,
  },
  {
    label: "Card Request",
    path: "/dashboard/card-request",
    icon: CardRequestIcon,
  },
  {
    label: "Stock",
    path: "/dashboard/stock",
    icon: StockIcon,
  },
  {
    label: "Cards",
    path: "/dashboard/cards",
    icon: CardsIcon,
  },
  {
    label: "Authorization List",
    path: "/dashboard/authorization-list",
    icon: AuthorizationListIcon,
  },
  {
    label: "Authorization Queue",
    path: "/dashboard/authorization-queue",
    icon: AuthorizationQueueIcon,
  },
  {
    label: "Trail",
    path: "/dashboard/trail",
    icon: TrailIcon,
  },
  {
    label: "Account",
    path: "/dashboard/account",
    icon: AccountIcon,
  },
];

export default Links;
