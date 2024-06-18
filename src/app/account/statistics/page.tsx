import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AccountStatistics = dynamic(
  () => import("@/components/account/account-statistics"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Statistics | My Account",
};

export default async function StatisticPage() {
  const { data } = await statsGet();

  if (!data) return null;

  return (
    <section>
      <AccountStatistics data={data} />
    </section>
  );
}
