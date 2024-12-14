import requests
import hashlib
import os
import json
import concurrent.futures

# 设置 URL 和请求参数
url = "http://117.73.255.69:9090/prod-api/common/certificate/viewAndDownload.gson"
start_year = 2024
output_file = "staffs.json"

# 用于记录需要保存的 staffId
staffs_to_save = []

# 检查文件是否存在
if os.path.exists(output_file):
    with open(output_file, 'r', encoding='utf-8') as f:
        staffs_to_save = json.load(f)

# 加密函数，MD5小写加密
def md5_encrypt(value):
    return hashlib.md5(value.encode('utf-8')).hexdigest()

# 请求并处理图片
def request_and_process(staff_id):
    # 生成 MD5 加密的 staffId
    encrypted_staff_id = md5_encrypt(staff_id)
    
    # 设置请求的参数
    params = {
        "staffId": encrypted_staff_id,
        "startYear": start_year
    }

    # 发起请求
    try:
        response = requests.get(url, params=params, timeout=10)
        
        if response.status_code == 200:
            # 获取图片数据
            image_data = response.content

            # 图片大小检查
            image_size_kb = len(image_data) / 1024
            print(f"staffId: {staff_id}, 图片大小: {image_size_kb:.2f}KB")
            
            # 如果图片小于10KB，删除它
            if image_size_kb < 10:
                print(f"图片小于10KB，已删除: {staff_id}")
                return

            # 如果图片大于100KB，删除它
            if image_size_kb > 100:
                print(f"图片大于100KB，已删除: {staff_id}")
                return

            # 如果图片大小介于 10KB 到 100KB 之间，不做任何处理，保持原样
            print(f"图片大小适中，未删除: {staff_id}")
        
        else:
            print(f"请求失败，staffId: {staff_id}, 错误码: {response.status_code}")
    
    except requests.RequestException as e:
        print(f"请求出错，staffId: {staff_id}, 错误信息: {e}")

# 写入保存的 staffId 到文件
def save_staffs_to_file():
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(staffs_to_save, f, ensure_ascii=False, indent=4)
        print(f"已保存 staffId 到文件 {output_file}")

# 主程序
def main():
    # 使用 ThreadPoolExecutor 进行多线程处理
    with concurrent.futures.ThreadPoolExecutor(max_workers=60) as executor:
        # 遍历 staffId 从 370000000000000000 到 379999999999999999
        for staff_id_num in range(370000000000000000, 380000000000000000):
            staff_id = str(staff_id_num)
            executor.submit(request_and_process, staff_id)
    
    # 保存记录的 staffId 到文件
    save_staffs_to_file()

if __name__ == "__main__":
    main()
