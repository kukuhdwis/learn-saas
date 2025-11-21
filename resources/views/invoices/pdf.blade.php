<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Invoice {{ $invoice->number }}</title>
    <style>
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 100%;
            margin: 0 auto;
        }
        .header {
            margin-bottom: 40px;
            border-bottom: 2px solid #eee;
            padding-bottom: 20px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
        .invoice-details {
            float: right;
            text-align: right;
        }
        .client-details {
            margin-bottom: 30px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        th {
            background: #f8f9fa;
            border-bottom: 2px solid #dee2e6;
            text-align: left;
            padding: 12px;
            font-weight: bold;
        }
        td {
            border-bottom: 1px solid #dee2e6;
            padding: 12px;
        }
        .total-section {
            text-align: right;
            margin-top: 20px;
        }
        .total-label {
            font-weight: bold;
            margin-right: 20px;
        }
        .total-amount {
            font-size: 1.2em;
            font-weight: bold;
            color: #2563eb;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 0.8em;
            color: #777;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <table style="border: none; margin: 0;">
                <tr style="border: none;">
                    <td style="border: none; padding: 0; vertical-align: top;">
                        <div class="logo">Orchestra</div>
                        <div>Your Company Name</div>
                        <div>123 Business Street</div>
                        <div>City, Country</div>
                    </td>
                    <td style="border: none; padding: 0; text-align: right; vertical-align: top;">
                        <h1>INVOICE</h1>
                        <div><strong>Number:</strong> {{ $invoice->number }}</div>
                        <div><strong>Date:</strong> {{ $invoice->issue_date->format('M d, Y') }}</div>
                        <div><strong>Status:</strong> {{ ucfirst($invoice->status) }}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div class="client-details">
            <h3>Bill To:</h3>
            <div><strong>{{ $invoice->client->name }}</strong></div>
            <div>{{ $invoice->client->email }}</div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th style="text-align: center;">Quantity</th>
                    <th style="text-align: right;">Price</th>
                    <th style="text-align: right;">Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach($invoice->items as $item)
                <tr>
                    <td>{{ $item->description }}</td>
                    <td style="text-align: center;">{{ $item->quantity }}</td>
                    <td style="text-align: right;">${{ number_format($item->price, 2) }}</td>
                    <td style="text-align: right;">${{ number_format($item->quantity * $item->price, 2) }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <div class="total-section">
            <span class="total-label">Total Amount:</span>
            <span class="total-amount">${{ number_format($invoice->total_amount, 2) }}</span>
        </div>

        <div class="footer">
            <p>Thank you for your business!</p>
        </div>
    </div>
</body>
</html>
