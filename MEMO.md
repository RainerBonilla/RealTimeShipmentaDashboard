# Real-time Shipment Status Dashboard

**by Rainer Bonilla**

## Two key technical decisions:

- I've decided to take advantage of the mono repo and creating global types so
  multiple projects can point a single source of truth.
- I've decided to go for creating context files in the frontend because I
  personally like how robust and also, dynamic can be for some scenarios where
  we don't need to track a huge amount of different data changing constantly.

## Is this feature needed to handle 1 million entries, what would I change?

- The very first that comes to mind are definitely the queries/the way we fetch
  data. since we're currently missing stuff like pagination.
- Another thing would be a minor refactor of our current schema for handle
  shipments better or even create a history of statuses.

## If you'd have more time, what would be you next feature?

- Definitely creating a history of shipment statuses. So users see how their
  packages have been updated since the shipment's creation. With that we can
  even create a progress bar in the frontend indicating the next steps.
