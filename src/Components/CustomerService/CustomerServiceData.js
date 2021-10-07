import order from "../../images/order.png";
import refund from "../../images/refund.png";
import productHelp from "../../images/productHelp.png";
import digitalHelp from "../../images/digitalHelp.png";
import subscription from "../../images/subscription.jpg";
import payment from "../../images/payment.png";
import account from "../../images/account.png";
import reportIssue from "../../images/reportIssue.png";
import safeShopping from "../../images/safeShopping.png";


export const service = [
    {
        title: "Your Orders",
        details: "Track packages",
        details2: "Edit or cancel orders",
        img: order,
        path: "/order",
    },
    {
        title: "Returns & Refunds",
        details: "Return or exchange items",
        details2: "Print return mailing labels",
        img: refund,
        path: "/returnRefund",
    },
    {
        title: "Get Product Help",
        details: "Troubleshoot product setup and usage issues",
        img: productHelp,
        path: "/productHelp",
    },
    {
        title: "Digital Services and Device Support",
        details: "Troubleshoot device issues",
        img: digitalHelp,
        path: "/digitalSupport",
    },
    {
        title: "Manage Subscription",
        details: "Learn subscription benefits",
        details2: "Cancel subscription",
        img: subscription,
        path: "/subscription",
    },
    {
        title: "Payments & Gift Cards",
        details: "Payment methods",
        details2: "View card balance",
        img: payment,
        path: "/giftCard",
    },
    {
        title: "Your Account",
        details: "Manage your account preferences",
        img: account,
        path: "/account",
    },
    {
        title: "Report Issues",
        details: "Report issues on orders and deliveries",
        img: reportIssue,
        path: "/report",
    },
    {
        title: "Safe Online Shopping",
        details: "Protect your account",
        details2: "Report something suspicious",
        img: safeShopping,
        path: "/safeShopping",
    },

];
