def process_order(order):
    valid = [x for x in order if x[0] > 10 and x[1] < 20]
    total = 0
    for x in valid:
        total += x[0] * x[1]
    return {"items": valid, "total": total}


