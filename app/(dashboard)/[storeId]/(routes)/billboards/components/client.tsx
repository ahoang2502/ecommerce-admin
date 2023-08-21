"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/DataTable";
import { BillboardColumn, columns } from "./Columns";
import ApiList from "@/components/ui/ApiList";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient = ({ data }: BillboardClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />

      <Heading title="API" description="API calls for Billboards" />
      <Separator />
      <ApiList entityIdName="billboardId" entityName="billboards" />
    </>
  );
};

export default BillboardClient;
