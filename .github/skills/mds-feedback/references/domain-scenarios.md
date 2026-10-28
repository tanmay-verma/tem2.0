# Domain Scenarios

Logistics feedback patterns mapped to components. Use these as reference when generating feedback messages for logistics applications.

| Scenario                       | Component         | Appearance | Heading                | Body                                                                         |
| ------------------------------ | ----------------- | ---------- | ---------------------- | ---------------------------------------------------------------------------- |
| Booking confirmed              | `mc-toast`        | `success`  | Booking confirmed      | Booking BK-12345 is now confirmed.                                           |
| Booking failed                 | `mc-notification` | `error`    | Booking failed         | Could not complete booking. Check the details and try again.                 |
| Document uploaded              | `mc-toast`        | `success`  | Document uploaded      | Bill of Lading has been uploaded.                                            |
| Document rejected              | `mc-notification` | `error`    | Document rejected      | The uploaded file is not a valid PDF. Upload a PDF file.                     |
| Vessel delay detected          | `mc-notification` | `warning`  | Vessel delay detected  | MV Maersk Seletar departure delayed by 48h. ETAs are being recalculated.     |
| Container not found            | `mc-notification` | `error`    | Container not found    | Container MSKU1234567 could not be located. Verify the number and try again. |
| Shipment cancelled             | `mc-toast`        | `success`  | Shipment cancelled     | Shipment SH-789 has been cancelled.                                          |
| Cancel shipment (confirmation) | `mc-dialog`       | —          | Cancel shipment?       | This action cannot be undone. All associated documents will be archived.     |
| Schedule published             | `mc-notification` | `info`     | Schedule updated       | The Asia–Europe TP6 schedule for Q3 has been published.                      |
| Session expiring               | `mc-notification` | `warning`  | Session expiring       | Your session expires in 5 minutes. Save your work to avoid losing changes.   |
| Settings saved                 | `mc-toast`        | `success`  | Settings saved         | —                                                                            |
| Copied to clipboard            | `mc-toast`        | `success`  | Copied to clipboard    | —                                                                            |
| Bulk action partial failure    | `mc-notification` | `warning`  | 3 of 5 bookings failed | Review the failed bookings and retry.                                        |
