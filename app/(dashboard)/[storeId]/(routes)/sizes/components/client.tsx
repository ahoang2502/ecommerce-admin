"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/DataTable";
import { SizeColumn, columns } from "./Columns";
import ApiList from "@/components/ui/ApiList";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface SizeClientProps {
  data: SizeColumn[];
}

const SizeClient = ({ data }: SizeClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />

      <Heading title="API" description="API calls for Sizes" />
      <Separator />
      <ApiList entityIdName="sizeId" entityName="sizes" />
    </>
  );
};

export default SizeClient;
