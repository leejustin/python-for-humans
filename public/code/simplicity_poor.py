def process_order(order):
    return {
        "items": [x for x in order if x[0] > 10 and x[1] < 20],
        "total": sum(x[0] * x[1] for x in order if x[0] > 10 and x[1] < 20),
    }


