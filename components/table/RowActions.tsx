"use client";

import { Row } from "@tanstack/react-table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/DropdownMenu";
import { Button } from "@components/ui/Button";
import { Dialog, DialogTrigger } from "@components/ui/Dialog";
import VoteModel from "@components/vote/VoteModel";

import { proposalSchema } from "@data/table/schema";
import { states } from "@data/table/data";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const proposal = proposalSchema.parse(row.original);
  const stateValue = states.find(
    (state) => state.value === row.getValue("state")
  );

  if (!stateValue) {
    return null;
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="w-4 h-4 " />
            <span className="sr-only" data-state={proposal.state}>
              View proposal
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <span>
                View Proposal <span className="sr-only">{proposal.id}</span>
              </span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(proposal.proposer);
            }}
          >
            Copy Proposer Address
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <VoteModel proposal={proposal} stateValue={stateValue} />
    </Dialog>
  );
}
